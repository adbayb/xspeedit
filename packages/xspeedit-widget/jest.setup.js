const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const { shallow, mount, render } = Enzyme;
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
