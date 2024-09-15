
# React Digital Clock Component

A reusable digital clock component for React that can be customized with various styles like text color, font size, font weight, and width/height.

## Features

- Digital clock display (hours, minutes, seconds, AM/PM)
- Customizable text color, font size, font weight, width, and height
- Works seamlessly with React and TypeScript

## Installation

Install the package via npm:

```bash
npm install digital-time
```

## Usage

Here’s a basic example of how to use the `DigitalClock` component:

```tsx
import React from 'react';
import DigitalClock from 'DigitalClock';

function App() {
  return (
    <div>
      <h1>My Digital Clock</h1>
      <DigitalClock 
        className="my-clock" 
        textColor="blue" 
        fontSize="24px" 
        fontWeight="bold"
        width="150px" 
        height="50px" 
      />
    </div>
  );
}

export default App;
```

### Props

The `DigitalClock` component accepts the following props for customization:

| Prop        | Type   | Default | Description                                           |
|-------------|--------|---------|-------------------------------------------------------|
| `className` | string | `""`    | Additional class names for styling                    |
| `textColor` | string | `"black"` | Color of the clock text                             |
| `fontSize`  | string | `"16px"` | Font size of the clock text                          |
| `fontWeight`| string | `"normal"` | Font weight of the clock text                      |


### Example

#### Customize Clock Text Color and Size

You can easily customize the text color, size, and more using the available props:

```tsx
<DigitalClock 
  textColor="red" 
  fontSize="30px" 
  fontWeight="bold" 
/>
```

This will display a red clock with larger, bold numbers, and the specified width and height.

#### Custom CSS

You can also use your own CSS to further style the component by passing a custom `className`:

```tsx
<DigitalClock className="custom-clock" />
```

```css
.custom-clock {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 10px;
}
```

## License

This project is licensed under the MIT License.

---