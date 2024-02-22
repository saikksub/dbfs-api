import process from 'node:process';
import test from 'ava';
import dotenv from 'dotenv';
import {connect, getStatus, getList} from './index.js';

dotenv.config();

test('Connect and get status', async t => {
	t.is(await connect({
		url: process.env.BASE_URL,
		token: process.env.TOKEN,
	}), true);

	const rootDirStatus = await getStatus();
	t.is(rootDirStatus.is_dir, true);
});

test('Llist files from root', async t => {
	const listRootDir = await getList('/');
	t.is(Array.isArray(listRootDir.files), true);
});
