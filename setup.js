window.onload = () => {
    loadStyles()

    $('select.dropdown').dropdown()

    $('#style').on('change', loadCategories)
    $('#category').on('change', updateFormular)
}

function loadStyles() {
    let style = $('#style')
    let category = $('#category')
    let container = $('#container')

    style.empty()
    style.append(`<option value="">Style</option>`)

    category.empty()
    category.append(`<option value="">Category</option>`)

    container.empty()

    let i = 0
    for(let s of Object.keys(STYLES)) {
        style.append(`<option value="${i}">${s}</option>`)
        i++
    }
}

function loadCategories() {
    let style = $('#style')
    let category = $('#category')
    let container = $('#container')
    let output = $('#output')

    category.empty()
    category.append(`<option value="">Category</option>`)

    container.empty()
    output.empty()

    let i = 0
    for(let c of Object.keys(STYLES[style.find(":selected").text()])) {
        category.append(`<option value="${i}">${c}</option>`)
        i++
    }
}

function updateFormular() {
    let style = $('#style')
    let category = $('#category')
    let container = $('#container')
    let output = $('#output')

    container.empty()
    output.empty()

    let selected = STYLES[style.find(":selected").text()][category.find(":selected").text()]
    
    for(let prop of selected.parameters) {
        let object = ""
        if(prop.type === "check") {
            object = `
            <div class="ui toggle checkbox">
                <label>${prop.title}</label>
                <input type="checkbox" data-key="${prop.name}" onchange="parseTemplate()">
            </div>`
        }else if(prop.type == "divider") {
            container.append(`<div class="ui divider"></div>`)
            continue
        } else {
            object = `
            <label>${prop.title}</label>
            <input type="text" data-key="${prop.name}" placeholder="${prop.title}" oninput="parseTemplate()">
            `
        }

        container.append(`
        <div class="field inline wide">
            ${object}
        </div>
        `)
    }

    $('.ui.checkbox').checkbox()
}

function parseTemplate() {
    let style = $('#style')
    let category = $('#category')
    let output = $('#output')
    output.sticky('refresh')

    let selected = STYLES[style.find(":selected").text()][category.find(":selected").text()]
    
    let properties = $('[data-key]')
    jsonprops = {}
    properties.each((_, prop) => {
        if(prop.type === 'checkbox') {
            jsonprops[prop.dataset.key] = prop.checked
        } else {
            jsonprops[prop.dataset.key] = prop.value
        }
    })

    var template = Handlebars.compile(selected.template)
    output.html(template(jsonprops))
}