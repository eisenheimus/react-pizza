import style from './NotFound.module.scss';

function NotFound() {
	return (
		<div className={style.container}>
			<h2 className={style.title}>{'Ничего не нашлось :( '}</h2>
			<p className={style.desc}>Повезет в следующий раз!!!</p>
		</div>
	);
}

export default NotFound;
