text='Hello world'
shift= 3
alphabet='abcdefghigklmnopqrstuvwsyz'
encrypted_text=""
for char in text.lower():
    # Append space to the message
   if char==' ':
      encrypted_text+=char
   else:
    index=alphabet.find(char)
    new_index=index+shift
    new_char= alphabet[new_index]
    

   print('char:',char, 'encrypted_text:',new_char)
