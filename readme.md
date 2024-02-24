# DBFS API Library
`Beta release only. It is not recommended for use in production environments.`

This library provides a simple interface to interact with a Databricks Filesystem (DBFS). It enables users to perform a variety of file system operations such as getting the status of a file or directory, listing contents, creating and deleting directories, uploading files, and managing streams.

## Installation

```bash
npm install dbfs-api
```
> This npm library is currently in beta release. It is not recommended for use in production environments. An official stable version will be released soon.

## Usage

Here's how you can use the various functions provided by the library:

### Connect to DBFS

```javascript
import { connect } from 'dbfs-api';

await connect({ url: 'DBFS_API_URL', token: 'YOUR_ACCESS_TOKEN' });
```

### File and Directory Operations

#### Get Status

```javascript
import { getStatus } from 'dbfs-api';

const status = await getStatus('path/to/file_or_directory');
```

#### List Directory Contents

```javascript
import { getList } from 'dbfs-api';

const contents = await getList('path/to/directory');
```

#### Create a Directory

```javascript
import { createDirectory } from 'dbfs-api';

await createDirectory('path/to/new/directory');
```

#### Delete a Directory

```javascript
import { deleteDirectory } from 'dbfs-api';

await deleteDirectory('path/to/directory', true); // Set recursive flag as needed
```

#### Delete a File

```javascript
import { deleteFile } from 'dbfs-api';

await deleteFile('path/to/file');
```

### Stream Operations

#### Open a Stream

```javascript
import { openStream } from 'dbfs-api';

const streamHandle = await openStream('path/to/file', true); // Set overwrite flag as needed
```

#### Add a Block of Data to a Stream

```javascript
import { addBlock } from 'dbfs-api';

await addBlock(streamHandle, 'dataChunk');
```

#### Close a Stream

```javascript
import { closeStream } from 'dbfs-api';

await closeStream(streamHandle);
```

### Upload a File

```javascript
import { uploadFile } from 'dbfs-api';

await uploadFile('path/to/file', 'base64EncodedContent', false); // Set overwrite flag as needed
```

## Support

For support, please open an issue on the GitHub repository page.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
