function encabezado() {
    // creacion logo
    var div = document.createElement('div');
    div.className = 'py-5 text-center';
    var img = document.createElement('img');
    img.className = "d-block mx-auto mb-4";
    img.src = "bootstrap-solid.svg";
    img.width = 72;
    img.height = 72;
    div.appendChild(img);

    // creacion h2
    var h2 = document.createElement('h2');
    var texto_h2 = document.createTextNode('Checkout form')
    h2.appendChild(texto_h2);
    div.appendChild(h2);

    // creacion subtitulo
    var p = document.createElement('p');
    p.className = 'lead';
    var texto_p = document.createTextNode("Below is an example form built entirely with Bootstrap's form controls.Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.");
    p.appendChild(texto_p);
    div.appendChild(p);


    return div
}

function footer_links(texto) {
    var li = document.createElement('li');
    li.className = "list-inline-item";
    var a = document.createElement('a');
    a.href = '#'
    var text_a = document.createTextNode(texto);
    a.appendChild(text_a);
    li.appendChild(a);

    return li;
}

function footer() {
    var footer = document.createElement('footer');
    footer.className = "my-5 pt-5 text-muted text-center text-small"

    var p = document.createElement('p');
    p.className = "mb-1";
    var text_p = document.createTextNode('2017-2019 Company Name');
    p.appendChild(text_p);
    footer.appendChild(p);

    var ul = document.createElement('ul');
    ul.className = "list-inline";
    ul.appendChild(footer_links('Privacy'));
    ul.appendChild(footer_links('Terms'));
    ul.appendChild(footer_links('Support'));

    footer.appendChild(ul);


    return footer;
}

function span_builder(texto, klass) {
    var span = document.createElement('span');
    span.className = klass;
    var text = document.createTextNode(texto);
    span.appendChild(text);

    return span;

}

function item_carro(nombre, descripcion, precio, promo = false) {
    var li = document.createElement('li');
    var div = document.createElement('div');
    var small = document.createElement('small');

    if (promo) {
        li.className = 'list-group-item d-flex justify-content-between bg-light';
        div.className = 'text-success';
        small.className = 'text-success';
    } else {
        li.className = 'list-group-item d-flex justify-content-between lh-condensed';
        small.className = 'text-muted';
    }

    var h6 = document.createElement('h6');
    h6.className = 'my-0';
    h6.appendChild(document.createTextNode(nombre));

    small.appendChild(document.createTextNode(descripcion));
    div.appendChild(h6);
    div.appendChild(small);

    var span = document.createElement('span');
    span.className = 'text-muted';
    span.appendChild(document.createTextNode(precio));
    li.appendChild(div);
    li.appendChild(span);

    return li;
}

function codigo_promocion() {
    var form = document.createElement('form');
    form.className = 'card p-2';
    var div_group = document.createElement('div');
    div_group.className = 'input-group';
    form.appendChild(div_group);

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Promo code';
    div_group.appendChild(input);

    var div_button = document.createElement('div');
    div_button.className = 'input-group-append';
    var button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-secondary';
    button.appendChild(document.createTextNode('Redeem'));
    div_button.appendChild(button);
    div_group.appendChild(div_button);

    return form;
}

function carro() {
    var container = document.createElement('div');
    container.className = "col-md-4 order-md-2 mb-4";

    var h4 = document.createElement('h4');
    h4.className = "d-flex justify-content-between align-items-center mb-3"

    h4.appendChild(span_builder('Your cart', 'text-muted'));
    h4.appendChild(span_builder('3', 'badge badge-secondary badge-pill'));
    container.appendChild(h4);

    var ul = document.createElement('ul');
    ul.className = 'list-group mb-3'
    ul.appendChild(item_carro('Product name', 'Brief description', '$12'));
    ul.appendChild(item_carro('Second Product', 'Brief description', '$8'));
    ul.appendChild(item_carro('Third item', 'Brief description', '$5'));
    ul.appendChild(item_carro('Promo code', 'EXAMPLECODE', '-$5', true));

    var li_total = document.createElement('li');
    li_total.className = "list-group-item d-flex justify-content-between";
    var span_total = document.createElement('span');
    span_total.appendChild(document.createTextNode("Total(USD)"));
    var price_total = document.createElement('strong');
    price_total.appendChild(document.createTextNode('$20'));
    li_total.appendChild(span_total);
    li_total.appendChild(price_total);

    ul.appendChild(li_total);

    container.appendChild(ul);
    container.appendChild(codigo_promocion());

    return container;
}

// FORMULARIO

function username() {
    var div_input_username = document.createElement('div');
    div_input_username.className = 'input-group';

    var div_span = document.createElement('div');
    div_span.className = 'input-group-prepend';

    var span_username = document.createElement('span');
    span_username.className = 'input-group-text';

    span_username.appendChild(document.createTextNode('@'));

    div_span.appendChild(span_username);
    div_input_username.appendChild(div_span);

    return div_input_username;
}

function inputs_formulario(atr_for, label_text, input_type, id_input, validation, placeholder) {

    var div = document.createElement('div');

    var label = document.createElement('label');
    label.setAttribute('for', atr_for);
    label.appendChild(document.createTextNode(label_text));
    if (label_text === 'Email' || label_text === 'Address 2') {
        var span = document.createElement('span');
        span.className = 'text-muted';
        span.appendChild(document.createTextNode(' (Optional)'));
        label.appendChild(span);
        div.appendChild(label);
    } else {
        div.appendChild(label);
    }

    var input = document.createElement('input');
    if (label_text === 'First Name' || label_text === 'Last name') {
        div.className = 'col-md-6 mb-3'

    } else {
        div.className = 'mb-3'
        input.placeholder = placeholder;
    }

    input.type = input_type;
    input.className = 'form-control';
    input.id = id_input;

    if (label_text === 'Username') {
        var username_div = username();
        input.placeholder = 'Username';
        username_div.appendChild(input);
        div.appendChild(username_div);
    } else {
        div.appendChild(input);
    }

    var div_validation = document.createElement('div');
    div_validation.className = 'invalid-feedback';

    div_validation.appendChild(document.createTextNode(validation));
    div.appendChild(div_validation);

    return div;
}

function countryStateZip(number, attr_for, label_text, id_csz, validation, option_text) {
    var div = document.createElement('div');
    div.className = `col-md-${number} mb-3`;

    var label = document.createElement('label')
    label.setAttribute('for', attr_for);
    label.appendChild(document.createTextNode(label_text))
    div.appendChild(label);

    if (label_text !== 'Zip') {
        var select = document.createElement('select');
        select.className = 'custom-select d-block w-100'
        select.id = id_csz;

        var option = document.createElement('option');
        option.setAttribute('value', 'Choose...')
        option.appendChild(document.createTextNode(option_text))
        select.appendChild(option);
        div.appendChild(select);
    } else {
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.id = 'zip'
        div.appendChild(input);
    }

    var div_validation = document.createElement('div');
    div_validation.className = 'invalid-feedback';
    div_validation.appendChild(document.createTextNode(validation));

    div.appendChild(div_validation);

    return div;
}
function checkbox(input_id, attr_for, label) {
    var checkbox = document.createElement("div");
    checkbox.className = "custom-control custom-checkbox";

    var checkbox_input = document.createElement("input");
    checkbox_input.type = "checkbox";
    checkbox_input.className = "custom-control-input";
    checkbox_input.id = input_id;

    var checkbox_label = document.createElement("label");
    checkbox_label.className = "custom-control-label";
    checkbox_label.setAttribute("for", attr_for);
    checkbox_label.appendChild(document.createTextNode(label));

    checkbox.appendChild(checkbox_label);
    checkbox.appendChild(checkbox_input);

    return checkbox;
}

function hr() {
    var hr = document.createElement("hr");
    hr.className = "mb-4";

    return hr;
}

function payment(id_input, attr_for, label_text) {

    var div_input = document.createElement('div');
    div_input.className = 'custom-control custom-radio';

    var input = document.createElement('input');
    input.id = id_input;
    input.name = 'paymentMethod';
    input.type = 'radio';
    input.className = 'custom-control-input';

    var label = document.createElement('label');
    label.className = 'custom-control-label';
    label.setAttribute('for', attr_for);
    label.appendChild(document.createTextNode(label_text));

    div_input.appendChild(input);
    div_input.appendChild(label);

    return div_input;

}

function creditCard(number, attr_for, label_text, id_input, validation) {
    var div = document.createElement('div');
    div.className = `col-md-${number} mb-3`;

    var label = document.createElement('label');
    label.setAttribute('for', attr_for);
    label.appendChild(document.createTextNode(label_text));
    div.appendChild(label);

    var input = document.createElement('input');
    input.id = id_input;
    input.type = 'text';
    input.className = 'form-control';
    div.appendChild(input);

    if (id_input === 'cc-name') {
        var small = document.createElement('small');
        small.className = 'text-muted';
        small.appendChild(document.createTextNode('Full name as displayed on card'));
        div.appendChild(small);
    }

    var div_validation = document.createElement('div');
    div_validation.className = 'invalid-feedback';
    div_validation.appendChild(document.createTextNode(validation));
    div.appendChild(div_validation);

    return div;
}

function formulario() {
    var container = document.createElement('div');
    container.className = 'col-md-8 order-md-1';

    var h4 = document.createElement('h4');
    h4.className = 'mb-3';
    h4.appendChild(document.createTextNode('Billing Address'));

    var form = document.createElement('form');
    form.className = 'needs-validation';

    var row_name = document.createElement('div');
    row_name.className = 'row';

    row_name.appendChild(inputs_formulario('firstName', 'First Name', 'text', 'firstName', 'Valid first name is required'));
    row_name.appendChild(inputs_formulario('lastName', 'Last name', 'text', 'lastname', 'Valid first name is required.'));
    form.appendChild(row_name);

    var rowcsz = document.createElement('div');
    rowcsz.className = 'row';
    rowcsz.appendChild(countryStateZip(5, 'country', 'Country', 'country', 'Please select a valid country', 'United States'));
    rowcsz.appendChild(countryStateZip(4, 'state', 'State', 'state', 'Please provide a valid state', 'California',));
    rowcsz.appendChild(countryStateZip(3, 'zip', 'Zip', 'zip', 'Zip code required'));


    form.appendChild(inputs_formulario('username', 'Username', 'text', 'username', 'Your username is required'));
    form.appendChild(inputs_formulario('email', 'Email', 'email', 'email', 'Please enter a valid email address for shipping updates.', 'you@example.com'));
    form.appendChild(inputs_formulario('address', 'Address', 'text', 'address', 'Please enter your shipping address', '1234 Main St'))
    form.appendChild(inputs_formulario('address2', 'Address 2', 'text', 'address2', 'Please enter your shipping address', 'Apartment or suite'))
    form.appendChild(rowcsz);

    form.appendChild(hr());

    form.appendChild(checkbox('save-info', 'same-address', 'Shipping address os the same as my billing address'));
    form.appendChild(checkbox('same-address', 'save-info', 'Save this information for next time'));

    form.appendChild(hr());

    var h4_payment = document.createElement("h4");
    h4_payment.className = "mb-3";
    h4_payment.appendChild(document.createTextNode("Payment"));
    form.appendChild(h4_payment);

    var div_payment = document.createElement('div');
    div_payment.className = 'd-block my-3';
    div_payment.appendChild(payment('credit', 'credit', 'Credit Card'));
    div_payment.appendChild(payment('debit', 'debit', 'Dedit Card'));
    div_payment.appendChild(payment('paypal', 'paypal', 'PayPal'));
    form.appendChild(div_payment);

    var row_creditCard = document.createElement('div');
    row_creditCard.className = 'row';
    row_creditCard.appendChild(creditCard('6', 'cc-name', 'Name on card', 'cc-name', 'Name on card is required'));
    row_creditCard.appendChild(creditCard('6', 'cc-number', 'Credit card number', 'cc-number', 'Credit card number is required'));
    row_creditCard.appendChild(creditCard('3', 'cc-expiration', 'Expiration', 'cc-expiration', 'Expiration date required'));
    row_creditCard.appendChild(creditCard('3', 'cc-cvv', 'CVV', 'cc-cvv', 'Security code required'));

    form.appendChild(row_creditCard);

    form.appendChild(hr());

    var button = document.createElement('button');
    button.className = 'btn btn-primary btn-lg btn-block'
    button.type = 'submit';
    button.appendChild(document.createTextNode('Continue to checkout'))
    form.appendChild(button);

    container.appendChild(h4);
    container.appendChild(form);

    return container;
}


var body = document.getElementsByTagName('body')[0];
body.className = 'bg-light';
var container = document.createElement('div');
container.className = 'container';
var row = document.createElement('div');
row.className = 'row';

body.appendChild(container);
container.appendChild(encabezado())
container.appendChild(row);
row.appendChild(carro());
row.appendChild(formulario());
container.appendChild(footer())

