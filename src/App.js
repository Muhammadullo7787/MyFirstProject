import React from 'react';
import Tables from './component/Tables';


function createData(id,name, tel, adres, age, height,job,level) {
  return { id,name, tel, adres, age, height,job,level};
}

const rows = [
  createData(1,'Xeyrullo','+998911199044', 'OqYer', 17, 1.72,'Developer','JuniorCha',),
  createData(2,'Ahmadullo', '+998938423525', 'Buvayda', 16, 1.75,'Developer','JuniorCha'),
  createData(3,'Bexruz', '+998913978051', 'OqYer', 17, 1.82,'Developer','JuniorCha'),
  createData(4,'Bekmurod', '+998911447749', 'Buvayda', 16, 1.71,'Developer','JuniorCha'),
  createData(5,'Asliddin Aka', '+998908324567', 'OqYer', 18, 1.72,'Developer','JuniorCha'),
  createData(6,'Asror Aka', '+998911545017', 'OqYer', 19, 1.73,'Developer','BigJuniorCha'),
];


function App() {
  return (
    <div>
      <h1>SALOM</h1>
      <Tables buy job lev id nam act age tel adr list={rows}/>
    </div>
  );
}

export default App;
