import Perlin from '../../utils/perlin';

const generateData = () => {
  const labels = Array(24 * 60)
    .fill(0)
    .map((_, i) => {
      return ('0' + ~~(i / 60) + ':0' + Math.round(60 * ((i / 60) % 1))).replace(
        /\d(\d\d)/g,
        '$1',
      );
    })
    .filter((time) => {
      const [hour] = time.split(':');
      return ['09', '10', '11', '12', '13', '14', '15'].includes(hour);
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

  return { data, labels, previousData };
};

export default generateData;
