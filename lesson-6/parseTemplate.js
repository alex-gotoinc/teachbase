const parseTemplate = (el, propsObj) => {

  const isElement = element => element instanceof Element || element instanceof HTMLDocument;

  const setTextContent = el => {
    Object.values(el.dataset).forEach((value) => {
      if (propsObj[value]) {
        el.textContent = propsObj[value];
      } else {
        throw new Error(`Для "data-field=${value}" - нет подходяшего свойства в обьекте "propsObj"`);
      }
    });
  };

  if (isElement(el)) {

    // делаем массив из HTML-коллекции
    const arr = Array.from(el.childNodes);

    // мож опечатка, но в задаче именно просят обойти НОДЫ, а не елементы =>
    // вначале фильтруем все nodes по nodeType для получения массива с елементами
    const arrElements = arr.filter(node => node.nodeType === 1);

    // итерируемся и пытаемся поставить атт
    arrElements.forEach(el => {
      if (el.hasAttribute('data-field')) {
        setTextContent(el);
      } else {
        throw new Error(`У элемента "${el.tagName.toLowerCase()}" отсутствует аттрибут "data-field"`);
      }
    });
  } else {
    throw new Error('Первый аргумент должен быть HTML-елементом!');
  }

}

parseTemplate(document.getElementById('item'),
  {
    title: 'Hello world',
    description: 'The first program',
  });

