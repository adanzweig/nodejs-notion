// Load environment variables from a .env file
require('dotenv').config();

// Set common headers for Notion API requests
const headers = {
    'Authorization': `Bearer ${process.env.NOTION_SECRET}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2021-08-16'
}

// Function to read all data from a Notion database
async function readAll() {
    try {
        const page = await fetch(`https://api.notion.com/v1/databases/${process.env.DATABASE_ID}`, {
            method: 'GET',
            headers
        });
        const data = await page.json();
        return data;

    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to add data to a Notion database
async function addData(data) {
    try {
        const page = await fetch(`https://api.notion.com/v1/pages`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
        const response = await page.json();
        return response;

    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to update data in a Notion database
async function updateData(data, pageId) {
    try {
        const page = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
        })
        const pageUpdated = await page.json();
        return pageUpdated;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to delete data in a Notion database (by archiving)
async function deleteData(pageId) {
    return await updateData({ 'archived': true }, pageId);
}

// Self-invoking async function to demonstrate CRUD operations
(async () => {
    // Read all data from the Notion database
    let allData = await readAll();
    console.log('All data', allData);

    // Add new data to the Notion database
    let data = {
        'parent': { 'database_id': process.env.DATABASE_ID },
        'properties': {
            'Name': { 'title': [{ 'text': { 'content': 'New item on the table2' } }] },
        },
    };
    const page = await addData(data);
    console.log('Add Data');

    // Update the newly added data in the Notion database
    data = {
        'properties': {
            'Name': { 'title': [{ 'text': { 'content': 'Updated Record' } }] },
        },
    }
    await updateData(data, page.id);
    console.log('Update data');

    // Read all data from the Notion database again
    allData = await readAll();
    console.log('All data', allData);

    // Delete the data added earlier by archiving it
    await deleteData(page.id);
    console.log('Delete data');
})();
