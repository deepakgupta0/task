# Simple Embed Poll Widget

## Introduction
This project consists of two folders:
- **external-sites**: Contains the consumer-side code.
- **poll-widget**: Contains the producer/actual widget code.

When designing a widget, it's essential to consider the following aspects:
1. **CSS Namespace**: Prevent CSS name collisions between producer and consumer code.
2. **Framework Agnosticism**: Ensure the widget works independently of any specific framework.
3. **Configuration Flexibility**: Offer sufficient configuration options to the producer.
4. **Ease of Integration**: Make it easy to add the widget to existing projects.

Considering these factors, React was chosen as the technology for this task due to the following reasons:
- Built-in webpack configuration for transpiling CSS Modules and scoping class names and selectors.
- React's component-based architecture facilitates the maintenance of reusable UI components.

## Producer Side Code
1. Created a `Poll-Widget` component containing multiple `Poll-Card` components.
2. `Poll-Widget` component accepts a `poll-options` list as a prop and passes each option to `Poll-Card` component.
3. Exported an initializer function that receives configuration from the consumer code.
4. Bundled the components as a library named `Poll` to generate a single bundle.
5. Used the Terser webpack plugin for bundle minification.
6. Used a `Set` data structure to eliminate duplicate poll questions, with questions as hash keys.

## Consumer Side Code
1. Added a `<div>` with an ID along with the bundled producer code.
![Producer Integration](https://github.com/deepakgupta0/task/assets/52995035/e34b0e44-787a-4ad2-8fec-74e9ee4d314c)
2. Called the initializer method exported by the producer under the `Poll` module and passed the required configuration.
![Consumer Integration](https://github.com/deepakgupta0/task/assets/52995035/cc3a9c76-3966-42df-b3d7-cfa7ba453ff9)

