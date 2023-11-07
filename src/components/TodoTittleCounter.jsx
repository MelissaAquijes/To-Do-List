import '../styles/TodoTittleCounter.css';

function TodoTittleCounter() {
  return (
    <h1 className="tittleCounter">
      You have completed <span>2</span> of <span>5</span> to do's.
    </h1>
  );
}

export { TodoTittleCounter };