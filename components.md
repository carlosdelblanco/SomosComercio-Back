# Data Layer

## Data

- Business information (Card)

## Data Modifications

- Add/Remove business
- Update business information
- Remove business

# Components

## App

### Show data

- A header component
- A footer component
- A register user component
- A login user component
- A business card
- A business creation form
- A filter menu
- A business container component with a list of business
- A pagination component
- A remove business component
- A close session component
- An error page
- A loading page
- A feedback message
- An add new business button

## Header

### Show data

- "Somos Comercio" logo inside a div
- A Register user icon

## Filter menu

### Show data

- Filter categories

### Get actions

- Call the received action on click

## Login user

### Show data

- user field
- password field
- login button

### Get actions:

Call the received action on click

## Footer

### Show data

- "About us" info inside an span/h2
- A span showing "contact us"

### Get actions:

## Button

### Show data

- The received text/icon (remove business, add new business, close session)

### Get actions:

- Call the received action on click

## Business Container

### Show data

- An h1 with the received text
- Show a list of business
- Show a pagination button
- Show an add business button
- Show a filter menu

## Business Card

### Show data

- The received business data including:

  - Its name inside an h3
  - Its picture
  - Its slogan
  - Its address
  - Its adhesion date
  - Its contact number
  - It's business image

- An add edit business button (as administrator)

## Business creation form

### Show data

- A create button with the received text
- A form that receives the following text in its input fields:
  - Its name inside an h3
  - Its picture
  - Its slogan
  - Its address
  - Its adhesion date
  - Its contact number
  - It's business image

### Get actions

- Submits the input content
- Triggers an error when some fields are incomplete

## Pagination

### Show data

- Two buttons to change between pages

## Error page

### Show data

- The received text inside a p
  - "Error 404 "No se puede encontrar la pagina solicitada"

## Loading Page

### Show data

- The received gif in motion when loading the information

## Feedback message

### Show data

- The received text inside an p that changes depending on the action:

  - "Lo sentimos la operacion no se ha podido realizar"
  - "Los cambios se han realizado correctamente"
  - "Business removed"
  - "Business updated"
  - "You have created a new business"
