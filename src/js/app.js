var React = require('react')
var ReactDOM = require('react-dom')
var RaisedButton = require('material-ui/lib/raised-button')
var AppBar = require('material-ui/lib/app-bar');
var Menu   = require('material-ui/lib/menus/menu')
var MenuItem   = require('material-ui/lib/menus/menu-item')
var Divider    = require('material-ui/lib/menus/menu-divider')


/* Material-UI */
const MyAwesomeReactComponent = () => (
  <RaisedButton label="Submit" />
);

const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

const MenuBar = () => (
  <Menu autoWidth={false} openDirection="bottom-right" style={{borderTop: "none", height: "100%", overflow: "hidden", position: "absolute", top: "64px", width: "192px"}}>
    <MenuItem primaryText="Maps" />
    <MenuItem primaryText="Maps" />
    <MenuItem primaryText="Maps" />
    <MenuItem primaryText="Maps" />
    <MenuItem primaryText="Maps" />
  </Menu>
)

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <AppBarExampleIcon />
        <MenuBar />
        <CommentList />
        <CommentForm />
      </div>
    )
  }
})

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        CommentList
      </div>
    )
  }
})

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        CommentForm
      </div>
    )
  }
})

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
)
