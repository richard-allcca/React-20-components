---
# React Hook: useComponentDimensions

## Overview

The `useComponentDimensions` hook allows you to retrieve the dimensions (width and height) of a React component. This is particularly useful for scenarios like:

- Determining the size of an image for a lightbox component.
- Animating elements based on size changes.

## Key Features

- Utilizes `useLayoutEffect` to handle layout and paint updates.
- Leverages `useCallback` to memoize event handlers.
- Supports the modern `ResizeObserver` API for efficient size observation.

---

## How It Works

### State Management

The hook uses `useState` to track the dimensions of a component and returns an object with two properties:

- `width`
- `height`

### Lifecycle Handling

- `useLayoutEffect` ensures the dimensions are updated after the component is mounted and resized.
- If the browser supports the `ResizeObserver` API, it uses this API for size observation.
- Fallback to `window.addEventListener` for older browsers.

---

## The ResizeObserver API

The `ResizeObserver` API is a modern browser feature that efficiently observes changes in the size of an element. It is more performant than traditional event listeners like `window.resize` or `window.orientationchange`, especially when observing multiple elements.

---

## Example Usage

```jsx
import { useComponentDimensions } from '@nitsan770/linkedin-posts.react.hooks.use-component-dimensions';

const ExampleComponent = () => {
  const ref = React.useRef(null);
  const { width, height } = useComponentDimensions(ref);

  return (
    <div ref={ref}>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};
```

### Explanation

1. **Ref Creation**: A `ref` is created using `React.useRef` to access the DOM node of the component.
2. **Hook Integration**: The `useComponentDimensions` hook is passed the `ref`.
3. **Output**: The hook returns an object with `width` and `height` properties, which are displayed in the component.

---

## Additional Resources

For more details, visit the [documentation](https://bit.cloud/nitsan770/linkedin-posts/react/hooks/use-component-dimensions/~code/use-component-dimensions.docs.mdx).
