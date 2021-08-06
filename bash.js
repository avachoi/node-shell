process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  //if cmd is pwd, then find working directory
  if(cmd == "pwd"){
    process.stdout.write(process.cwd())
  }
  process.stdout.write('\nprompt > ');

})
