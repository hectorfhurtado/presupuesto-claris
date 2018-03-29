{
    const presupuesto    = document.querySelector ('.presupuesto').getAttribute ('data-value');
    const $interior      = document.querySelector ('.interior');
    const $inputPersonas = document.querySelector ('input#numero-personas');
    const personas       = [ 'Claris', 'Andrei', 'Gu' ];

    $inputPersonas.addEventListener ('change', function ()
    {
        creaPersonas (parseInt (this.value), getAporte (presupuesto, this));
    });

    $inputPersonas.addEventListener ('keyup', function ()
    {
        if (!this.value)
            return;

        if (parseInt (this.value) < 1)
        {
            this.value = 1;
            return;
        }

        if (parseInt (this.value) > 10)
        {
            this.value = 10;
            return;
        }

        creaPersonas (parseInt (this.value), getAporte (presupuesto, this));
    });

    creaPersonas (parseInt ($inputPersonas.value), getAporte (presupuesto, $inputPersonas));

    function creaPersonas (numeroPersonas = 1, aporte)
    {
        let htmlCasa = '';

        const aporteIndividual = Math.ceil (aporte / 3);

        for (let i = 0; i < numeroPersonas; i += 1)
            htmlCasa += (i === 0) ?
                getClarisElement(i, aporte, aporteIndividual) :
                getOtherElement(i, aporte, aporteIndividual);

        $interior.innerHTML = htmlCasa;
    }

    function getAporte (presupuesto, $aporteElement)
    {
        return Math.ceil (parseInt (presupuesto) / parseInt ($aporteElement.value))
    }

    function getOtherElement (index, aporte, aporteIndividual)
    {
        const total = index === 1 ?
            `<p class="total"><small><strong>Total: $${ aporte + aporteIndividual }</strong></small></p>` :
            index === 2 ?
            `<p class="total"><small><strong>Total: $${ aporte + aporteIndividual }</strong></small></p>` :
            '';

        return `
            <div class="persona">
                <p><strong>${ personas[index] ? personas[index] : `Persona ${ index + 1 }`}</strong></p>
                <p>Aporte: <br>$${ aporte }</p>
                ${ total }
            </div>
        `;
    }

    function getClarisElement (index, aporte, aporteIndividual)
    {
        return `
            <div class="persona">
                <p><strong>${ personas[ index ]}</strong></p>
                <div class="individual">
                    <p>Aporte Nando: <br>$${ aporteIndividual }</p>
                    <p>Aporte Gu: <br>$${ aporteIndividual }</p>
                    <p>Aporte Andrei: <br>$${ aporteIndividual }</p>
                </div>
            </div>
        `;
    }
}
