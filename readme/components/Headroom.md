## Props ##

### Headroom ###

Name           | Type   | Default                      | Description
---------------|--------|------------------------------|-------------
style          | object |                              | `style` attribute for the root element
className      | string |                              | `class` attribute for the root element
children       | node   |                              | child elements
tolerance      | number | 5                            | offset in pixel since scrolling top/down occurs to show/hide this component
offset         | number | 0                            | offset in pixel since scrolling down from the page top to hide this component
initialClass   | string | 'mdui-headroom'              | class added to the root node once initialized
pinnedClasss   | string | 'mdui-headroom-pinned-top'   | class added to the root node once showed
unpinnedClasss | string | 'mdui-headroom-unpinned-top' | class added to the root node once hidden
