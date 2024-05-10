import Image from "next/image";
import React, { FC, useState } from "react";

type CardProps = {
	item: any;
};

const Card: FC<CardProps> = ({ item }) => {
	return (
		<>
			<Image
				className="h-full object-cover"
				src={item.coverImage.large}
				width={400}
				height={600}
				alt={item.title.native}
			/>
			<h2 className="absolute bottom-3  left-2">{item.title.romaji}</h2>
		</>
	);
};

export default Card;
