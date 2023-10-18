"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		const canvas = document.getElementById("Matrix");
		//@ts-ignore
		const context = canvas.getContext("2d");
		//@ts-ignore
		canvas.width = window.innerWidth;
		//@ts-ignore
		canvas.height = window.innerHeight;
		const katakana =
			"アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
		const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const nums = "0123456789";

		const alphabet = katakana + latin + nums;

		const fontSize = 16;
		//@ts-ignore
		const columns = canvas.width / fontSize;
		//@ts-ignore
		const rainDrops = Array.from({ length: columns }).fill(canvas.height);

		for (let x = 0; x < columns; x++) {
			rainDrops[x] = 1;
		}

		const draw = () => {
			context.fillStyle = "rgba(0, 0, 0, 0.05)";
			//@ts-ignore
			context.fillRect(0, 0, canvas.width, canvas.height);

			context.fillStyle = "#0F0";
			context.font = fontSize + "px monospace";

			for (let i = 0; i < rainDrops.length; i++) {
				const text = alphabet.charAt(
					Math.floor(Math.random() * alphabet.length)
				);
				//@ts-ignore
				context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

				if (
					//@ts-ignore
					rainDrops[i] * fontSize > canvas.height &&
					Math.random() > 0.975
				) {
					rainDrops[i] = 0;
				}
				//@ts-ignore
				rainDrops[i]++;
			}
		};

		setInterval(draw, 30);
	}, []);

	return (
		<main className="h-screen">
			<div className="flex flex-col justify-center items-center h-full">
				<canvas
					id="Matrix"
					className="absolute z-0 opacity-50"
				></canvas>
				<div className="flex flex-col items-center animate-pulse">
					<label className=" z-10  font-bold text-4xl">
						Seja bem vindo a matrix
					</label>
					<div>
						<Link href={"/choose"}>
							<img
								src="/play.svg"
								alt=""
								className="w-52 self-center cursor-pointer m-4"
							/>
						</Link>
					</div>
					<label className=" z-10  font-bold text-4xl">
						Vamos começar!
					</label>
				</div>
			</div>
		</main>
	);
}
