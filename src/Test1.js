const [first_name, set_first_name] = useState("anonymous");
const [last_name, set_last_name] = useState("anonymous");
const [start_date, set_start_date] = useState(new Date());
const [info_selected_active, set_info_selected_active] = useState(props);

useEffect(() => {
    changeFavicon();
    submit_data(first_name, last_name, start_date);
    set_info_selected_active(false);
}, []);

const availableTimeslots = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
  ].map((id) => {
    return {
      id,
      startTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          9,
          0,
          0,
          0
        )
      ),
      endTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          17,
          0,
          0,
          0
        )
      )
    };
  });
  const submit_data = async (first_name, last_name, start_date) => {
   
  
    res.data.first_name = first_name;
    res.data.last_name = last_name;
    res.data.start_date = start_date.toString();
    console.log(res.data.start_date);
  
    //console.log(res.data);
    //setIP(res.data.IPv4);
    emailjs.send("katjas_service_id_aaa", "template_yhw91kr", res.data).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  
   
  
    return (
      <>
 
      <div>
      <Segment inverted>
      <div class="inline">
        <Input
          inverted
          placeholder="First Name"
          style={{ margin: "2px" }}
          onChange={(e) => {
            set_first_name(e.target.value);
          }}
        />
        <Input
          inverted
          placeholder="Last Name"
          style={{ margin: "2px" }}
          onChange={(e) => {
            set_last_name(e.target.value);
          }}
        />
        <ConfirmSuccess
          submit_data={() => {
            submit_data(first_name, last_name, start_date);
          }}
        />
  
        <InformLogged
          info_selected_active={info_selected_active}
          set_info_selected_active={set_info_selected_active}
        />
      </div>
    </Segment>{" "}
    <ScheduleMeeting
      borderRadius={10}
      primaryColor="#3f5b85"
      eventDurationInMinutes={30}
      availableTimeslots={availableTimeslots}
      onStartTimeSelect={(e) => {
        set_start_date(e.startTime);
        set_info_selected_active(true);
      }}
    />
  </div>
      </>
      )