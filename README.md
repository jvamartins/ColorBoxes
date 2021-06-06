# Made with react app.

The basic idea is to change a box color when it is clicked. The app is divided into three components:

* App
* Container
* Box

Container acts like a wrapper for the box component. The user can specify how many boxes will de rendered, or if none is passed, the defaultProps will set its default value to 5.

The main idea is to make children component 'dumber' than its parents. So, data will be passed down as props and the click handler is defined on container and it is also passed down as props to the box component.

Inside the box the component, i call the parent click event with this.props.clickEvent and passing as arguments the current color and the index of the clicked box, which are also defined as props, so no state is defined whatsoever. 

Just clone it, run npm install and npm start. 

# Happy hacking!
