import test from 'ava';
import { connect, getStatus } from './index.js';

test('main', async t => {
	t.is(await connect({
		url: process.env.BASE_URL,
		token: process.env.TOKEN
	}), true);
	t.is(await getStatus(), true);
});
