import React from "react";

const InfoPanel = () => {
	return (
		<section>
			<h1>Préambule:</h1>
			<p>
				{
					"XspeedIt est une société d'import / export ayant robotisé toute sa chaîne d'emballage de colis."
				}
			</p>
			<h1>But:</h1>
			<p>
				{
					"La société souhaite trouver un algorithme permettant à ses robots d'optimiser le nombre de cartons d'emballage utilisés. Cette application essaye donc de répondre à cette problématique."
				}
			</p>
			<h1>Propriétés des cartons et articles:</h1>
			<p>
				{
					"Les articles à emballer sont de taille variable, représentée par un entier compris entre 1 et 9. Chaque carton a une capacité de contenance de 10. Ainsi, un carton peut par exemple contenir un article de taille 3, un article de taille 1, et un article de taille 6."
				}
			</p>
			<style jsx>{`
				section {
					padding: 0 15px;
					overflow-y: scroll;
				}

				h1 {
					margin: 30px 0 20px 0;
					color: white;
				}
			`}</style>
		</section>
	);
};

export default InfoPanel;
