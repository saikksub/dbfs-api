import process from 'node:process';
import test from 'ava';
import dotenv from 'dotenv';
import {v4 as uuidv4} from 'uuid';
import {connect, getStatus, getList, createDirectory, deleteDirectory} from './index.js';

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

	const responseCreateFile = await createDirectory(filePath);
	t.is({}.constructor === responseCreateFile.constructor, true);

	const responseDeleteFile = await deleteDirectory(filePath);
	t.is({}.constructor === responseDeleteFile.constructor, true);
});
