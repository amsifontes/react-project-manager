
<div> # Top-level app component
    props: {
        num tasks
        task names
        start date [chart]
        end date [chart]
        window_width
        }
    }
    <div> Navigation component
        <LOGO>
            props: {
                logo_img_url
            }
        </LOGO>
        <TASK_LIST>
            props: {
                percentage width of window_width
                num tasks // for min height
                task names
            }
            <TASK>
                props: {
                    task name
                    color [optional]
                }
            </TASK>
            <TASK></TASK>
            <TASK></TASK>
            <TASK></TASK>
        </TASK_LIST>

    </div>


    <div> Date List component
        props: {
                percentage width of window_width
                start date [chart]
                end date [chart]
                duration [chart]
        }
        <DAY>
            props: {
                date or day number
            }
        </DAY>
        <DAY></DAY>
        <DAY></DAY>
        <DAY></DAY>
        <DAY></DAY>
        <DAY></DAY>
        <DAY></DAY>

    </div>

    <div> Gantt barchart component
        props: {
                percentage width of window_width
                num tasks [for height]
                start date [chart]
                end date [chart]
                duration [chart]
        }
        <BAR>
            props: {
                color [optional]
                start date [task]
                end date [task]
                duration [task]
            }
        </BAR>
        <BAR></BAR>
        <BAR></BAR>
        <BAR></BAR>
        
    </div>
</div>