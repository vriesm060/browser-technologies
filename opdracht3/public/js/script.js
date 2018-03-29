'use strict';

(function () {

  var app = {
    init: function () {
      this.createPlaceholder();
      dragDrop.init();
    },
    createPlaceholder: function () {
      // Placeholder detection:
      if (document.createElement('input').placeholder !== undefined) {
        var input = document.getElementsByTagName('input');
        for (var i = 0; i < input.length; i++) {
          input[i].setAttribute('placeholder', 'Bijv. ' + input[i].value);
          input[i].value = '';
        }
      }
    }
  };

  var dragDrop = {
    dropzone: function () {
      if (document.querySelector('.dropzone') !== undefined) {
        return document.querySelector('.dropzone');
      } else {
        var form = document.getElementsByTagName('form');
        for (var i = 0; i < form.length; i++) {
          if (form[i].getAttribute('class') === 'dropzone') {
            return form[i];
          }
        }
      }
    },
    items: function () {
      if (document.querySelectorAll('main ul li') !== undefined) {
        return document.querySelectorAll('main ul li');
      } else {
        return document.getElementsByTagName('main')[0].children[0].children;
      }
    },
    init: function () {
      if (('draggable' in document.createElement('li')) && document.addEventListener) {
        var self = this;

        this.createDropzone();

        for (var i = 0; i < this.items().length; i++) {
          if ('classList' in document.body) {
            this.items()[i].classList.add('draggable');
          } else {
            this.items()[i].className += ' draggable';
          }

          this.items()[i].addEventListener('dragstart', function (e) {
            self.dragStart(e);
          }, false);

          this.items()[i].addEventListener('dragend', function (e) {
            if ('classList' in document.body) {
              self.dropzone().classList.remove('show');
            } else {
              self.dropzone().className.slice(' show');
            }
          }, false);
        }

        this.dropzone().addEventListener('dragover', function (e) {
          self.drag(e);
        }, false);

        this.dropzone().addEventListener('drop', function (e) {
          self.drop(e);
        }, false);
      }
    },
    createDropzone: function () {
      var div = document.createElement('div');
      var h1 = document.createElement('h1');
      var radio = document.createElement('input');

      radio.setAttribute('type', 'radio');
      radio.setAttribute('name', 'delete');
      radio.setAttribute('disabled', 'true');
      this.dropzone().appendChild(radio);

      this.dropzone().appendChild(div);

      if ('textContent' in document.body) {
        h1.textContent = 'Verwijderen';
      } else {
        h1.innerHTML = 'Verwijderen';
      }

      div.appendChild(h1);
    },
    dragStart: function (e) {
      if ('classList' in document.body) {
        this.dropzone().classList.add('show');
      } else {
        this.dropzone().className += ' show';
      }

      e.dataTransfer.setData('text', e.target.id);
    },
    drag: function (e) {
      e.dataTransfer.dropEffect = 'move';
      e.preventDefault();
    },
    drop: function (e) {
      var data = e.dataTransfer.getData('text');
      var item = document.getElementById(data);
      e.target.appendChild(item);
      this.remove(item);
      e.preventDefault();
    },
    remove: function (item) {
      var self = this;
      var radio = this.dropzone().children[0];
      radio.value = item.id;
      radio.disabled = false;
      radio.checked = true;

      if ('classList' in document.body) {
        this.dropzone().classList.remove('show');
      } else {
        this.dropzone().className.slice(' show');
      }

      setTimeout(function () {
        self.dropzone().submit();
      }, 300);
    }
  };

  app.init();

}) ();
