import Perlin from '../../utils/perlin';

const generateData = () => {
  const labels = Array(24 * 60)
    .fill(0)
    .map((_, i) => {
      return (~~(i / 60) + ':0' + Math.round(60 * ((i / 60) % 1))).replace(
        /\d(\d\d)/g,
        '$1',
      );
    })
    .filter((time) => {
      const [hour, minute] = time.split(':');
      return (
        ['09', '10', '11', '12', '13', '14', '15'].includes(hour) ||
        (hour === '16' && minute === '00')
      );
    });

  const perlin = new Perlin();
  let y = 0.004;

  const data = [
    labels.map(() => {
      y += 0.008;
      return perlin.get(1, y) * 300 + 300;
    }),
  ];

  const previousData = Math.random() * 100 + 250;

  return {
    data,
    labels,
    previousData,
    currentData: data[0][data.length - 1],
    isUp: data[data.length - 1] >= data[data.length - 2],
  };
};

export default generateData;
