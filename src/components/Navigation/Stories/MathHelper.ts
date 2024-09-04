export default class MathHelper {
    static generateSVGPath(startAngle:number, endAngle:number, radius:number, strokeWidth:number){
        const cx = radius + strokeWidth;
        const cy = radius + strokeWidth;
        const startRadians = (startAngle * Math.PI) / 180;
        const endRadians = (endAngle * Math.PI) / 180;
        const x1 = cx + radius * Math.cos(startRadians);
        const y1 = cy + radius * Math.sin(startRadians);
        const x2 = cx + radius * Math.cos(endRadians);
        const y2 = cy + radius * Math.sin(endRadians);
        const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
        const pathData = `M ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2}`;
        return pathData;
      }
  
      static getArcAngles(segments:number, gap:number = 0){
        if (segments <= 0) throw new Error("Invalid segment number.");
        if (gap < 0 || gap >= 360 / segments) throw new Error("Invalid Gap");
        const totalGap = gap * segments;
        const angleAvailable = 360 - totalGap;
        const anglePerSegment = angleAvailable / segments;
        const arcAngles = [];
        for (let i = 0; i < segments; i++) {
          const startAngle = i * (anglePerSegment + gap) - gap / 2;
          const endAngle = startAngle + anglePerSegment;
          arcAngles.push([startAngle, endAngle]);
        }
        return arcAngles;
      }
}
