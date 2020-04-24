const calculate = (time) => {
  var datee = new Date();
  var ppp =
    datee.getDate() + "." + datee.getMonth() + "." + datee.getFullYear();
  if (time > 24 && time < 48) {
    time = time - 24;
    if (time < 10) {
      time = "0" + time;
    }

    ppp =
      datee.getDate() + 1 + "." + datee.getMonth() + "." + datee.getFullYear();
    return ppp + " " + time + ":00";
  }
  if (time >= 48 && time < 72) {
    time = time - 48;
    if (time < 10) {
      time = "0" + time;
    }
    ppp =
      datee.getDate() + 2 + "." + datee.getMonth() + "." + datee.getFullYear();
    return ppp + " " + time + ":00";
  }
  if (time >= 72) {
    time = time - 72;
    if (time < 10) {
      time = "0" + time;
    }
    ppp =
      datee.getDate() + 3 + "." + datee.getMonth() + "." + datee.getFullYear();
    return ppp + " " + time + ":00";
  } else {
    return ppp + " " + time + ":00";
  }
};

const interpolation = (project) => {
  var tempProps = JSON.parse(JSON.stringify(project));
  //[tempProps] = tempProps;
  console.log(project);
  var i;
  var st = { list: [project] };
  var data = new Date();
  data.setHours(1);

  console.log("data");
  console.log(data.getHours);
  let intertwal = (property1, property2, num) => {
    return parseFloat((parseFloat(property1) - parseFloat(property2)) / num);
  };

  var interwal_t_zewn =
    (parseFloat(tempProps.Row1.temp_z) - parseFloat(tempProps.Row4.temp_z)) / 3;

  var interwal_zach =
    (parseFloat(tempProps.Row1.zach) - parseFloat(tempProps.Row4.zach)) / 3;

  var interwal_Vw =
    (parseFloat(tempProps.Row1.Vw) - parseFloat(tempProps.Row4.Vw)) / 3;

  var interwal_t_zewn_part2 =
    (parseFloat(tempProps.Row4.temp_z) - parseFloat(tempProps.Row19.temp_z)) /
    15;

  var interwal_zach_part2 =
    (parseFloat(tempProps.Row4.zach) - parseFloat(tempProps.Row19.zach)) / 15;

  var interwal_Vw_part2 =
    (parseFloat(tempProps.Row4.Vw) - parseFloat(tempProps.Row19.Vw)) / 15;

  var interwal_t_zewn_part3 =
    (parseFloat(tempProps.Row19.temp_z) - parseFloat(tempProps.Row28.temp_z)) /
    9;

  var interwal_zach_part3 =
    (parseFloat(tempProps.Row19.zach) - parseFloat(tempProps.Row28.zach)) / 9;

  var interwal_Vw_part3 =
    (parseFloat(tempProps.Row19.Vw) - parseFloat(tempProps.Row28.Vw)) / 9;

  var interwal_t_zewn_part4 = intertwal(
    tempProps.Row28.temp_z,
    tempProps.Row43.temp_z,
    15
  );

  var interwal_zach_part4 = intertwal(
    tempProps.Row28.zach,
    tempProps.Row43.zach,
    15
  );
  var interwal_Vw_part4 = intertwal(tempProps.Row28.Vw, tempProps.Row43.Vw, 15);

  var interwal_t_zewn_part5 = intertwal(
    tempProps.Row43.temp_z,
    tempProps.Row52.temp_z,
    9
  );

  var interwal_zach_part5 = intertwal(
    tempProps.Row43.zach,
    tempProps.Row52.zach,
    9
  );

  var interwal_Vw_part5 = intertwal(tempProps.Row43.Vw, tempProps.Row52.Vw, 9);

  var interwal_t_zewn_part6 = intertwal(
    tempProps.Row52.temp_z,
    tempProps.Row67.temp_z,
    15
  );

  var interwal_zach_part6 = intertwal(
    tempProps.Row52.zach,
    tempProps.Row67.zach,
    15
  );

  var interwal_Vw_part6 = intertwal(tempProps.Row52.Vw, tempProps.Row67.Vw, 15);

  var interwal_t_zewn_part7 = intertwal(
    tempProps.Row67.temp_z,
    tempProps.Row76.temp_z,
    9
  );

  var interwal_zach_part7 = intertwal(
    tempProps.Row67.zach,
    tempProps.Row76.zach,
    9
  );

  var interwal_Vw_part7 = intertwal(tempProps.Row67.Vw, tempProps.Row76.Vw, 9);

  var interwal_t_zewn_part8 = intertwal(
    tempProps.Row76.temp_z,
    tempProps.Row85.temp_z,
    9
  );

  var interwal_zach_part8 = intertwal(
    tempProps.Row76.zach,
    tempProps.Row85.zach,
    9
  );

  var interwal_Vw_part8 = intertwal(tempProps.Row76.Vw, tempProps.Row85.Vw, 9);

  console.log("interwal_t_zewn_part5");
  console.log(interwal_t_zewn_part5);
  const newList = {
    Vw: tempProps.Row1.Vw,
    data: tempProps.Row1.data,
    temp_z: tempProps.Row1.temp_z,
    zach: "testowe",
  };

  var list = st.list.map((arg2) => {
    for (i = 1; i < 83; i++) {
      var name = "Row" + (1 + i);
      if (i < 4) {
        var list = {
          ...arg2,
          [name]: {
            Vw: parseFloat(
              tempProps.Row1.Vw - parseFloat(interwal_Vw) * i
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row1.temp_z) -
              parseFloat(interwal_t_zewn) * i
            ).toFixed(1),
            zach: parseFloat(
              tempProps.Row1.zach - parseFloat(interwal_zach) * i
            ).toFixed(0),
          },
        };
      }
      if (i >= 4 && i < 19) {
        //data.setHours(15);
        var list = {
          ...arg2,
          [name]: {
            Vw: (
              parseFloat(tempProps.Row4.Vw) -
              parseFloat(interwal_Vw_part2) * (i - 3)
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row4.temp_z) -
              parseFloat(interwal_t_zewn_part2) * (i - 3)
            ).toFixed(1),
            zach: (
              parseFloat(tempProps.Row4.zach) -
              parseFloat(interwal_zach_part2) * (i - 3)
            ).toFixed(0),
          },
        };
      }
      if (i >= 19 && i < 28) {
        //data.setHours(15);
        var list = {
          ...arg2,
          [name]: {
            Vw: (
              parseFloat(tempProps.Row19.Vw) -
              parseFloat(interwal_Vw_part3) * (i - 18)
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row19.temp_z) -
              parseFloat(interwal_t_zewn_part3) * (i - 18)
            ).toFixed(1),
            zach: (
              parseFloat(tempProps.Row19.zach) -
              parseFloat(interwal_zach_part3) * (i - 18)
            ).toFixed(0),
          },
        };
      }
      if (i >= 28 && i < 43) {
        //data.setHours(15);
        var list = {
          ...arg2,
          [name]: {
            Vw: (
              parseFloat(tempProps.Row28.Vw) -
              parseFloat(interwal_Vw_part4) * (i - 27)
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row28.temp_z) -
              parseFloat(interwal_t_zewn_part4) * (i - 27)
            ).toFixed(1),
            zach: (
              parseFloat(tempProps.Row28.zach) -
              parseFloat(interwal_zach_part4) * (i - 27)
            ).toFixed(0),
          },
        };
      }
      if (i >= 43 && i < 52) {
        //data.setHours(15);
        var list = {
          ...arg2,
          [name]: {
            Vw: (
              parseFloat(tempProps.Row43.Vw) -
              parseFloat(interwal_Vw_part5) * (i - 42)
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row43.temp_z) -
              parseFloat(interwal_t_zewn_part5) * (i - 42)
            ).toFixed(1),
            zach: (
              parseFloat(tempProps.Row43.zach) -
              parseFloat(interwal_zach_part5) * (i - 42)
            ).toFixed(0),
          },
        };
      }
      if (i >= 52 && i < 67) {
        //data.setHours(15);
        var list = {
          ...arg2,
          [name]: {
            Vw: (
              parseFloat(tempProps.Row52.Vw) -
              parseFloat(interwal_Vw_part6) * (i - 51)
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row52.temp_z) -
              parseFloat(interwal_t_zewn_part6) * (i - 51)
            ).toFixed(1),
            zach: (
              parseFloat(tempProps.Row52.zach) -
              parseFloat(interwal_zach_part6) * (i - 51)
            ).toFixed(0),
          },
        };
      }
      if (i >= 67 && i < 76) {
        //data.setHours(15);
        var list = {
          ...arg2,
          [name]: {
            Vw: (
              parseFloat(tempProps.Row67.Vw) -
              parseFloat(interwal_Vw_part7) * (i - 66)
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row67.temp_z) -
              parseFloat(interwal_t_zewn_part7) * (i - 66)
            ).toFixed(1),
            zach: (
              parseFloat(tempProps.Row67.zach) -
              parseFloat(interwal_zach_part7) * (i - 66)
            ).toFixed(0),
          },
        };
      }
      if (i >= 76) {
        //data.setHours(15);
        var list = {
          ...arg2,
          [name]: {
            Vw: (
              parseFloat(tempProps.Row76.Vw) -
              parseFloat(interwal_Vw_part8) * (i - 75)
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row76.temp_z) -
              parseFloat(interwal_t_zewn_part8) * (i - 75)
            ).toFixed(1),
            zach: (
              parseFloat(tempProps.Row76.zach) -
              parseFloat(interwal_zach_part8) * (i - 75)
            ).toFixed(0),
          },
        };
      }

      arg2 = list;
    }

    return list;
  });
  console.log("interpoaltion complited");
  var tempProp2s = JSON.parse(JSON.stringify(list[0]));
  return tempProp2s;
};

export default interpolation;
