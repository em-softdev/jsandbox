// Estos eventos de ratón sirven para controlar la redimensión vertical y horizontal de los paneles
document.addEventListener('DOMContentLoaded', function () {
    const resizable = function (resizer) {
        const direction = resizer.getAttribute('data-direction') || 'horizontal';
        const prevSibling = resizer.previousElementSibling;
        const nextSibling = resizer.nextElementSibling;

        // Posición actual del ratón
        let x = 0;
        let y = 0;
        let prevSiblingHeight = 0;
        let prevSiblingWidth = 0;

        // Manejador de evento del ratón que se dispara cuando arrastra el contenedor .resizer con el ratón
        const mouseDownHandler = function (e) {
            // Posición actual del ratón
            x = e.clientX;
            y = e.clientY;

            const left = prevSibling.getBoundingClientRect();
            prevSiblingHeight = left.height;
            prevSiblingWidth = left.width;

            if (nextSibling != null) {
                const rigth = nextSibling.getBoundingClientRect();
                nextSiblingHeight = rigth.height;
                nextSiblingWidth = rigth.width;
            }

            // Añadimos los eventos al Document
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            // Calculamos cuántos píxeles se ha movido el ratón pulsado
            // Y colocamos el resizer en la nueva posición
            const dx = e.clientX - x;
            const dy = e.clientY - y;

            switch (direction) {
                case 'vertical':
                    const h =
                        ((prevSiblingHeight + dy) * 100) /
                        resizer.parentNode.getBoundingClientRect().height;
                    prevSibling.style.height = `${h}%`;

        

                    break;
                case 'horizontal':
                default:
                    const widthCode =
                        ((prevSiblingWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
                    prevSibling.style.width = `${widthCode}%`;

                    const widthOutput =
                        ((nextSiblingWidth - dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
                    nextSibling.style.width = `${widthOutput}%`;
                    break;
            }

                ///////////////////////////////////////ALERTA//////////////////////////////////////////////////////////////
                // En Ace Editor es nesario reescalar los editores para que se adapten al nuevo tamaño de su div.
                // Si no se hace cambia su tamaño pero no el tamaño de lo que muestra, por lo que corta líneas de código.
                editorHTML.resize();
                editorCSS.resize();
                editorJS.resize();
                editorTEXT.resize();
                editorDEV.resize();
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////

            const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
            resizer.style.cursor = cursor;
            document.body.style.cursor = cursor;

            prevSibling.style.userSelect = 'none';
            prevSibling.style.pointerEvents = 'none';
            if (nextSibling != null) {
                nextSibling.style.userSelect = 'none';
                nextSibling.style.pointerEvents = 'none';
            }
        };

        const mouseUpHandler = function () {
            resizer.style.removeProperty('cursor');
            document.body.style.removeProperty('cursor');

            prevSibling.style.removeProperty('user-select');
            prevSibling.style.removeProperty('pointer-events');
            if (nextSibling != null) {
                nextSibling.style.removeProperty('user-select');
                nextSibling.style.removeProperty('pointer-events');
            }

            // Quitamos los eventos al Document
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        resizer.addEventListener('mousedown', mouseDownHandler);
    };

    document.querySelectorAll('.resizer').forEach(function (ele) {
        resizable(ele);
    });
});