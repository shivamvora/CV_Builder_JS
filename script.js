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

// generating cv
function generateCV() {
    // name
    let nameField = document.getElementById( 'nameField' ).value;
    document.getElementById( 'nameT1' ).innerHTML = nameField;
    document.getElementById( 'nameT2' ).innerHTML = nameField;
    // contact
    document.getElementById( 'contactT' ).innerHTML = document.getElementById( 'contactField' ).value;
    // address
    document.getElementById( 'addressT' ).innerHTML = document.getElementById( 'addressField' ).value;
    // socialLink
    // https://www.instagram.com/shivam_vora/
    // https://www.facebook.com/shivam.vora.184/
    // https://www.linkedin.com/in/shivam-vora-79565a198/
    document.getElementById( 'fbT' ).href = document.getElementById( 'fbField' ).value;
    document.getElementById( 'instaT' ).href = document.getElementById( 'instaField' ).value;
    document.getElementById( 'LinkedT' ).href = document.getElementById( 'linkedField' ).value;
    // objective
    document.getElementById( 'objectieT' ).innerHTML = document.getElementById( 'objectiveField' ).value;
    //Experience
    let wes = document.querySelectorAll( '.weField' );
    let str = '';
    for ( let e of wes ) {
        str = str + `<li>${e.value}</li>`
    }
    document.getElementById( 'weT' ).innerHTML = str;
    // Academic Qualification
    let aqs = document.querySelectorAll( '.eqField' );
    let str1 = '';
    for ( let aq of aqs ) {
        str1 = str1 + `<li>${aq.value}</li>`
    }
    document.getElementById( 'aqT' ).innerHTML = str1;

    document.getElementById( 'cv-form' ).style.display = 'none';
    document.getElementById( 'cv-template' ).style.display = 'block';

}

function printCV() {
    document.getElementById( 'print_btn' ).style.visibility = "hidden";
    window.print();
    document.getElementById( 'print_btn' ).style.visibility = "visible";

}