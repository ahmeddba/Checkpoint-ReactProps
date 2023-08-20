import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './Player/Players/PlayersList';


function App() {
  return (
    <div className="App">
      {/* The field background */}
<div class="container">
	<div class="line"></div>
	<div class="half"></div>
	<div class="panelty left"></div>
	<div class="panelty right"></div>
	<div class="p-spot left">&nbsp;</div>
	<div class="p-spot right">&nbsp;</div>
  <div className='pl'>
    {/* Call of the List */}
    <PlayersList  />
    {/* End of call  */}
    </div>
	<div class="center"></div>
	<div class="p-place left"></div>
	<div class="p-place right"></div>

</div>
{/* End of field */}
    </div>
  );
}

export default App;
