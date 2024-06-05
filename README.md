Here we have 2 folders

external-sites folder has the consumer side code
poll-widget folder has the producer/actual widget code

Whenever We Design Any Widget Following Things Should Be Kept In Mind
1. CSS name collision should not happen between producer and consumer code
2. Widget should be framework agnostic
3. Should give enough configuration to producer
4. Should be easier to add on

Keeping Following Things In Mind, I have choosed React as technology for this task, following are key things which made me choose
1. as it has built-in webpack configuration which has build step for transpiling CSS Modules(changes class names and selectors to be scoped)
2. In React, webpack generates HTML/CSS/JS budles which we can easily merge them into single bundle by using custom webpack cofig
3. React has component-based architecture which is easy to maintain reusable UI components

##Producer Side Code
1. I have created Poll-Widget component which contains multiple Poll-Card Component
2. Poll-Widget Components takes in poll-options list as prop and passes each option to Poll-Card Component.
3. Further , I have exported a initializer function which takes in configuration from consumer code.
4. To Generate a single bundle, I have bundled them as a library under the name Poll.
5. To minify this bundle, I have used terser webpack plugin.
6. To eliminate duplicate poll questions I have used Set data-structure which takes in question as hash keys.


##Consumer Side Code
1. Add div with id, along with the bundled producer code
![image](https://github.com/deepakgupta0/task/assets/52995035/e34b0e44-787a-4ad2-8fec-74e9ee4d314c)

2. Call initializer method exported by producer under Poll Module and pass the required configuration
![image](https://github.com/deepakgupta0/task/assets/52995035/cc3a9c76-3966-42df-b3d7-cfa7ba453ff9)



