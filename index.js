function getGrade (s1, s2, s3) {
  let score = Math.floor((s1 + s2 + s3) / getGrade.length)
  // console.log(score)
  if( score >= 90 &&  score <= 100) {
  return 'A'
  } else if ( score >= 80 && score <= 89){
  return 'B' 
  }  else if ( score >= 70  && score <= 79) {
  return 'C' 
  } else if ( score >= 60 && score <= 69) {
  return 'D'
  } else  {
  return 'F'
  }
  }

getGrade(10,25,46);
console.log(getGrade(10,25,46));