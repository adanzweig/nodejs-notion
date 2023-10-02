# Notion Database CRUD Operations

This project demonstrates basic CRUD (Create, Read, Update, Delete) operations on a Notion database using the Notion API.

## Prerequisites

Before running the project, ensure that you have the following:

- Node.js installed on your machine.
- A Notion integration and API key. You can obtain this by creating an integration on the Notion Integrations page.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/adanzweig/nodejs-notion.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-notion
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Notion integration credentials:

   ```env
   NOTION_SECRET=<your-notion-secret>
   DATABASE_ID=<your-database-id>
   ```

## Usage

Run the project using:

```bash
npm start
```

This will execute the script that performs basic CRUD operations on your Notion database.

## Customize

Feel free to customize the `index.js` file to adapt the script to your specific use case. You can modify the data being added or update to suit your Notion database schema.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.