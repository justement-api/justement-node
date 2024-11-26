# SearchEngine

Types:

- <code><a href="./src/resources/search-engine.ts">Language</a></code>
- <code><a href="./src/resources/search-engine.ts">SearchResultSnippet</a></code>
- <code><a href="./src/resources/search-engine.ts">SearchResultSnippets</a></code>
- <code><a href="./src/resources/search-engine.ts">SearchEngineCountResponse</a></code>

Methods:

- <code title="get /api/count">client.searchEngine.<a href="./src/resources/search-engine.ts">count</a>({ ...params }) -> SearchEngineCountResponse</code>
- <code title="get /api/search">client.searchEngine.<a href="./src/resources/search-engine.ts">search</a>({ ...params }) -> SearchResultSnippets</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DecisionDocument</a></code>
- <code><a href="./src/resources/documents.ts">Document</a></code>

Methods:

- <code title="get /api/document">client.documents.<a href="./src/resources/documents.ts">retrieve</a>({ ...params }) -> Document</code>
- <code title="get /api/documentByRef">client.documents.<a href="./src/resources/documents.ts">retrieveByReference</a>({ ...params }) -> Document</code>

# Errors

Types:

- <code><a href="./src/resources/errors.ts">AuthenticationError</a></code>
- <code><a href="./src/resources/errors.ts">DocumentNotFoundError</a></code>
- <code><a href="./src/resources/errors.ts">InternalError</a></code>
- <code><a href="./src/resources/errors.ts">ValidationError</a></code>
