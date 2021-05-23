const renderNested = (target, arr) => {

  if (Array.isArray(arr)) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    arr.forEach(el => {
      if (typeof el === "string") li.textContent = el;
      if (Array.isArray(el)) renderNested(li, el);
      ul.appendChild(li);
    });

    target.appendChild(ul);
  } else {
    throw new Error('Аргумент должен быть массивом!')
  }

};

const nestedList = ["Item", ["Item2", ["Item3"]]];
renderNested(document.getElementById('nested'), nestedList);
renderNested(12);