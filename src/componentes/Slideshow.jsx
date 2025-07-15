import { useCallback, useEffect, useRef } from "react";
import "./Slideshow.css";
import FlechaIzquierda from "./../assets/img/iconmonstr-angel-left-thin.svg";
import FlechaDerecha from "./../assets/img/iconmonstr-angel-right-thin.svg";

const Slideshow = ({
	children,
	controles = false,
	autoplay = false,
	velocidad = "500",
	intervalo = "5000",
}) => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if (slideshow.current.children.length > 0) {
			console.log("Siguiente");

			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = "none";
				slideshow.current.style.transform = "translateX(0)";

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener("transitionend", transicion);
			};

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener("transitionend", transicion);
		}
	}, [velocidad]);

	const anterior = () => {
		console.log("Anterior");
		if (slideshow.current.children.length > 0) {
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(
				ultimoElemento,
				slideshow.current.firstChild
			);

			slideshow.current.style.transition = "none";
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = "translateX(0)";
			}, 30);
		}
	};

	useEffect(() => {
		if (autoplay) {
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);

			// Eliminamos los intervalos
			slideshow.current.addEventListener("mouseenter", () => {
				clearInterval(intervaloSlideshow.current);
			});

			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			slideshow.current.addEventListener("mouseleave", () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	// Define Slide as a functional component
	const Slide = ({ children }) => <div className="slide">{children}</div>;

	// Define TextoSlide as a functional component
	const TextoSlide = ({ children, colorFondo, colorTexto }) => (
		<div
			className="texto-slide"
			style={{
				"--color-fondo": colorFondo || "rgba(0,0,0,.3)",
				"--color-texto": colorTexto || "#fff",
			}}
		>
			{children}
		</div>
	);

	return (
		<div className="contenedor-principal">
			<div className="contenedor-slideshow" ref={slideshow}>
				{children}
			</div>
			{controles && (
				<div className="controles">
					<button className="boton" onClick={anterior}>
						<img src={FlechaIzquierda} alt="Anterior" />
					</button>
					<button className="boton" data-derecho onClick={siguiente}>
						<img src={FlechaDerecha} alt="Siguiente" />
					</button>
				</div>
			)}
		</div>
	);
};

export default Slideshow;
