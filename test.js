import test from 'ava';
import {connect, getStatus} from './index.js';

test('main', async t => {
	t.is(await connect({url: 'https://5809494911638817.7.gcp.databricks.com/api/2.0/dbfs',
		token: 'dapie5e1e2e053b5fbadf5a6e23a0d8b0963'}), true);
	t.is(await getStatus(), true);
});
