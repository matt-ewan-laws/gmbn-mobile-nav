const Content = () => {
  const testImages = Array(10)
    .fill(0)
    .map(() => (
      <div className="mx-2 mt-2 mb-2">
        <img alt="Video" src="https://placehold.co/600x400" />
      </div>
    ));
  return <main>{testImages}</main>;
};

export default Content;
