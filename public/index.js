{
    const presupuesto = document.querySelector ('.presupuesto').getAttribute ('data-value');
    const $interior = document.querySelector ('.interior');
    const $inputPersonas = document.querySelector ('input#numero-personas');

    $inputPersonas.addEventListener ('change', function ()
    {
        creaPersonas (parseInt (this.value), getAporte (presupuesto, this));
    });

    creaPersonas (parseInt ($inputPersonas.value), getAporte (presupuesto, $inputPersonas));

    function creaPersonas (numeroPersonas = 1, aporte)
    {
        let htmlCasa = '';

        for (let i = 0; i < numeroPersonas; i += 1)
        {

            const html = `
                <div class="persona">
                    <p><strong>Persona ${ i + 1 }</strong></p>
                    <p>$${ aporte }<p>
                </div>
            `

            htmlCasa += html;
        }

        $interior.innerHTML = htmlCasa;
    }

    function getAporte (presupuesto, $aporteElement)
    {
        return Math.ceil (parseInt (presupuesto) / parseInt ($aporteElement.value))
    }
}
