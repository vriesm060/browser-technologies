'use strict';

// Client Side:

(function () {

  var storage = [];

  var app = {
    init: function () {
      // addItem.submit.el.addEventListener('click', function (e) {
      //   addItem.getInputValue();
      //   e.preventDefault();
      // }, false);

      dragDrop.areas.forEach(function (area) {
        area.addEventListener('drop', function (e) {
          dragDrop.drop(e);
        }, false);
        area.addEventListener('dragover', function (e) {
          dragDrop.allowDrop(e);
        }, false);
      });

      dragDrop.items.forEach(function (item) {
        item.addEventListener('dragstart', function (e) {
          dragDrop.drag(e);
          dragDrop.deleteItem(this);
        }, false);
      });
    }
  };

  var dragDrop = {
    areas: document.querySelectorAll('.drag-drop-area'),
    items: document.querySelectorAll('main ul li'),
    allowDrop: function (e) {
      e.preventDefault();
    },
    drag: function (e) {
      e.dataTransfer.setData('text', e.target.id);
    },
    drop: function (e) {
      var data = e.dataTransfer.getData('text');
      e.target.appendChild(document.getElementById(data));
      console.log('dropped');
      e.preventDefault();
    },
    deleteItem: function (item) {
      console.log(item);

      var form = item.querySelector('form');
      form.submit();
    }
  };

  // var addItem = {
  //   input: {
  //     el: document.querySelector('.add-item form input')
  //   },
  //   submit: {
  //     el: document.querySelector('.add-item form [type="submit"]')
  //   },
  //   getInputValue: function () {
  //     var val = this.input.el.value;
  //     console.log(val);
  //
  //     if (/([a-zA-Z0-9])/.test(val)) {
  //       var item = {
  //         id: new Date().getTime(),
  //         item: val
  //       };
  //       storage.unshift(item);
  //       items.addNewItem();
  //     }
  //   }
  // };
  //
  // var items = {
  //   list: {
  //     el: document.querySelector('main ul')
  //   },
  //   addNewItem: function () {
  //     console.log(storage);
  //
  //     var self = this;
  //
  //     storage.forEach(function (item) {
  //       var li = document.createElement('li');
  //       var span = document.createElement('span');
  //       var form = document.createElement('form');
  //       var button = document.createElement('button');
  //       var svg = document.createElement('svg');
  //       var path = document.createElement('path');
  //
  //       self.list.el.appendChild(li);
  //
  //       span.textContent = item.item;
  //       li.appendChild(span);
  //
  //       form.action = '/delete';
  //       form.method = 'post';
  //       li.appendChild(form);
  //
  //       button.type = 'submit';
  //       button.name = 'delete';
  //       button.value = item.id;
  //       button.areaLabel = 'Verwijderen';
  //       form.appendChild(button);
  //
  //       svg.setAttribute('viewBox', '0 0 268.5 268.5');
  //       button.appendChild(svg);
  //
  //       var d = `
  //       M63.1,250.3c0,0,4,18.2,24.6,18.2h93.1c20.6,0,24.6-18.2,24.6-18.2l18.4-178.7h-179L63.1,250.3z M170,98.4
  //       c0-4.9,4-8.9,8.9-8.9c4.9,0,8.9,4,8.9,8.9L179,232.7c0,4.9-4,8.9-8.9,8.9s-8.9-4-8.9-8.9L170,98.4z M125.3,98.4
  //       c0-4.9,4-8.9,8.9-8.9c4.9,0,8.9,4,8.9,8.9v134.2c0,4.9-4,8.9-8.9,8.9c-4.9,0-8.9-4-8.9-8.9C125.3,232.7,125.3,98.4,125.3,98.4z
  //       M89.5,89.5c4.9,0,8.9,4,8.9,8.9l8.9,134.2c0,4.9-4,8.9-8.9,8.9c-4.9,0-8.9-4-8.9-8.9L80.5,98.4C80.5,93.5,84.6,89.5,89.5,89.5z
  //       M218.4,35.8H179V17.9C179,4.3,174.6,0,161.1,0h-53.7C95,0,89.5,6,89.5,17.9v17.9H50.1c-7.9,0-14.3,6-14.3,13.4
  //       c0,7.4,6.4,13.4,14.3,13.4h168.2c7.9,0,14.3-6,14.3-13.4C232.7,41.8,226.3,35.8,218.4,35.8z M161.1,35.8h-53.7l0-17.9h53.7
  //       L161.1,35.8L161.1,35.8z
  //       `;
  //
  //       path.setAttribute('fill', '#FFFFFF');
  //       path.setAttribute('d', d);
  //       svg.appendChild(path);
  //     });
  //   }
  // };

  app.init();

}) ();
