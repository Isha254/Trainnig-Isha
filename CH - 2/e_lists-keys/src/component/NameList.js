import React from 'react';


function NameList() {

    const names = ['Isha', 'Mahek', 'Khushi'];

    const nameList = names.map((name) => {
        return <li>{name}</li>
    });
    return(
        <ul>
            {nameList}
        </ul>
    );
}


export default NameList;