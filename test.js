import process from 'node:process';
import fs from 'node:fs/promises';
import path from 'node:path';
import test from 'ava';
import dotenv from 'dotenv';
import {v4 as uuidv4} from 'uuid';
import {
	connect,
	getStatus,
	getList,
	createDirectory,
	deleteDirectory,
	deleteFile,
	uploadFile,
} from './index.js';

dotenv.config();

test('Connect and get status', async t => {
	t.is(await connect({
		url: process.env.BASE_URL,
		token: process.env.TOKEN,
	}), true);

	const rootDirStatus = await getStatus('/');
	t.is(rootDirStatus.is_dir, true);
});

test('List workspaces on the root', async t => {
	const listRootDir = await getList('/');
	t.is(Array.isArray(listRootDir.files), true);
});

test('Create and delete a new folder under root dir', async t => {
	const newFolderName = uuidv4();
	const filePath = `/${newFolderName}`;

	const responseCreateDir = await createDirectory(filePath);
	t.is(responseCreateDir, true);

	const responseDeleteDir = await deleteDirectory(filePath);
	t.is(responseDeleteDir, true);
});

test('Upload a file into a new folder and then delete it', async t => {
	const newFolderName1 = uuidv4();
	const newFolderName2 = uuidv4();
	const dirPath1 = `/${newFolderName1}`;
	const dirPath2 = `/${newFolderName2}`;

	// Upload first file
	const responseCreateDir1 = await createDirectory(dirPath1);
	t.is(responseCreateDir1, true);

	const fileData1 = await fs.readFile(process.env.FILE_ABS_PATH_500KB);
	const fileDataBase64One = fileData1.toString('base64');
	const filePath1 = path.join(dirPath1, path.basename(process.env.FILE_ABS_PATH_500KB));

	const responseCreateFile1 = await uploadFile(filePath1, fileDataBase64One);
	t.is(responseCreateFile1, true);

	// Upload second file
	const responseCreateDir2 = await createDirectory(dirPath2);
	t.is(responseCreateDir2, true);

	const fileData2 = await fs.readFile(process.env.FILE_ABS_PATH_100KB);
	const fileDataBase64Two = fileData2.toString('base64');
	const filePath2 = path.join(dirPath2, path.basename(process.env.FILE_ABS_PATH_100KB));

	const responseCreateFile2 = await uploadFile(filePath2, fileDataBase64Two);
	t.is(responseCreateFile2, true);

	// Delete first file
	const responseDeleteFile1 = await deleteFile(filePath1);
	t.is(responseDeleteFile1, true);

	// Delete first directory
	const responseDeleteDir1 = await deleteDirectory(dirPath1);
	t.is(responseDeleteDir1, true);

	// Delete second dir
	const responseDeleteDir2 = await deleteDirectory(dirPath2);
	t.is(responseDeleteDir2, true);
});
