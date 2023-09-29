function Card() {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl p-5 flex flex-col justify-start gap-4 shadow-lg dark:bg-slate-800">
      <img
        src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt=""
        className="w-full rounded-lg"
      />
      <h1 className="text-2xl text-neutral-950 dark:text-slate-400">Website that can toggle the theme mode!</h1>
      <p className="text-base text-neutral-700 dark:text-slate-500 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, aperiam.</p>
      <button className="text-left text-neutral-900 dark:text-slate-400">Check It Out!</button>
    </div>
  );
}

export default Card