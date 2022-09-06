import './skills.css'

function Skills() {

    const frontendSkills = [
        {id: 1, skill: "HTML5", icon: "fa-brands fa-html5"},
        {id: 2, skill: "CSS3", icon: "fa-brands fa-css3-alt"},
        {id: 3, skill: "JavaScript", icon: "fa-brands fa-square-js"},
        {id: 4, skill: "Sass", icon: "fa-brands fa-sass"},
        {id: 5, skill: "Vue", icon: "fa-brands fa-vuejs"},
        {id: 6, skill: "React", icon: "fa-brands fa-react"},
    ]
    const tools = [
        {id: 1, tool: "Git"},
        {id: 2, tool: "Pinia"},
        {id: 3, tool: "Redux/Redux Toolkit"},
    ]

    const others = [
        {id: 1, other: "Nodejs"},
        {id: 2, other: "MySQL"},
        {id: 3, other: "MongoDB"},
        {id: 4, other: "Kotlin"},
        {id: 5, other: "Android Studio"},
        {id: 6, other: "Python"},
        {id: 7, other: "Typescript"},
    ]

  return (
    <section className='skills'>
            <div className="frontend-skills">
                    <h2>Skills</h2>
                <div className="my-skills">
                    {
                        frontendSkills.map((frontendSkill)=> (
                            <div className="skill" key={frontendSkill.id}>
                                <h4>{frontendSkill.skill}</h4>
                                <div className="icon">
                                    <i className={frontendSkill.icon}></i>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="other-skills">
                <div className="others">
                        <h2>Others</h2>
                    <div className="my-skills">
                         {
                            others.map((other)=> (
                                <div className="skill" key={other.id}>
                                    <h4>{other.other}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="others">
                        <h2>Tools</h2>
                    <div className="my-skills">
                        {
                            tools.map((tool)=> (
                                <div className="skill" key={tool.id}>
                                    <h4>{tool.tool}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Skills