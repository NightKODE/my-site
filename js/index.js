// $(document).ready(function(){
//   $('main').on('click', function(){
//     console.log('index.js is ready!')
//   })'
// });
ReactDOM.render(<div className='main__text'>Этот текст вставлен при помощи метода <span>react</span>.</div>, document.getElementById('reactdiv'));
ReactDOM.render(<ul className='lesson__list'>
  <div class='main__text'>Этот список вставлен при помощи метода <span>react</span>.</div>
  <li>Пункт</li>
  <li>Пункт</li>
  <li>Пункт</li>
</ul>, document.getElementById('react-div-2'));


const mouseClick = () => alert('Вы нажали на кнопку.');
const mouseHover = () => console.log('Вы навели на кнопку.');
const element = (<div className='main__text' onClick={mouseClick} onMouseEnter={mouseHover}>На этот элемент можно навести и нажать.</div>);
const divID1 = document.getElementById('react-div-3');
ReactDOM.render(element, divID1);
