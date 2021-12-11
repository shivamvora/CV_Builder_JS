function addNewWEField() {
    let newNode = document.createElement( 'textarea' );
    newNode.classList.add( 'form-control' )
    newNode.classList.add( 'weField' )
    newNode.classList.add( 'mt-2' )
    newNode.setAttribute( 'rows', 3 )
    newNode.setAttribute( 'placeholder', "Add More Items" )

    let weOb = document.getElementById( 'we' );
    let weAddButtonOb = document.getElementById( 'weAddButton' );

    weOb.insertBefore( newNode, weAddButtonOb );
}


function addNewAQField() {
    let newNode = document.createElement( 'textarea' );
    newNode.classList.add( 'form-control' )
    newNode.classList.add( 'eqField' )
    newNode.classList.add( 'mt-2' )
    newNode.setAttribute( 'rows', 3 )
    newNode.setAttribute( 'placeholder', "Add More Items" )

    let weOb = document.getElementById( 'aq' );
    let weAddButtonOb = document.getElementById( 'aqAddButton' );

    weOb.insertBefore( newNode, weAddButtonOb );
}