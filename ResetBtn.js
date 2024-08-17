function ResetBtn() {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <button onClick={handleReset} className="reset-button">
      GO!
    </button>
  );
}
