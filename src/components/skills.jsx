
function Skills(){
    return (
        <div class="skills-progress">
            <div>
            <p>Languages de programación</p>
            
            <label for="cpp">C++
                <progress id="cpp"   name="cpp"  min="0" max="100" value="80"></progress>
            </label>
                    
            <label for="js">Javascript
                <progress id="js"    name="js"   min="0" max="100" value="70"></progress>
            </label>

            <label for="py">Python
                <progress id="py"    name="py"   min="0" max="100" value="70"></progress>
            </label>                        

            <label for="cs">C#
                <progress id="cs"    name="cs"     min="0" max="100" value="60"></progress>
            </label>

            <label for="kt">Kotlin
                <progress id="kt"    name="kt"    min="0" max="100" value="40"></progress>
            </label>
            </div>

            <div>
                <p>Maquetación y Diseño</p>

                <label for="html">HTML
                    <progress id="html"  name="html"    min="0" max="100" value="80"></progress>
                </label>
                
                <label for="css">CSS
                    <progress id="css"   name="css"     min="0" max="100" value="80"></progress>
                </label>
            </div>

            <div>
                <p>Bases de datos</p>
                <label for="sql">SQL
                    <progress id="sql"   name="sql"     min="0" max="100" value="70"></progress>
                </label>
                
                <label for="mongo">MongoDB
                    <progress id="mongo" name="mongo"    min="0" max="100" value="50"></progress>
                </label>
            </div>
        </div>
    )
}

export default Skills
