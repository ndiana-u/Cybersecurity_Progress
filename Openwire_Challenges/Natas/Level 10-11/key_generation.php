<?php

$encryptedValue = base64_decode('HmYkBwozJw4WNyAAFyB1VUcqOE1JZjUIBis7ABdmbU1GIjEJAyIxTRg');
function xor_encrypt($in) {
    $key = json_encode(array( "showpassword"=>"no", "bgcolor"=>"#ffffff"));
    $text = $in;
    $outText = '';

    // Iterate through each character
    for($i=0;$i<strlen($text);$i++) {
    $outText .= $text[$i] ^ $key[$i % strlen($key)];
    }

    return $outText;
}

#xor_encrypting the encryptedValue and plainText will give the original key
#plainText (xor) key = encryptedValue and plainText (xor) encryptedvalue = key

# remember that setcookie("data", base64_encode(xor_encrypt(json_encode($d))));
# which is equal to setcookie("data", base64_encode(xor_encrypt(plainText)));
# which is equal to setcookie("data", base64_encode(encryptedValue))

print xor_encrypt($encryptedValue);
print "\n"
?>
