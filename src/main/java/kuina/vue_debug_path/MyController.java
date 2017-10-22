package kuina.vue_debug_path;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.NonNull;

@Controller
public class MyController {
	@GetMapping("/")
	public String app(@NonNull Model model) {
		model.addAttribute("appClass", "App");
		model.addAttribute("someParam", "baz");
		return "index";
	}

	@GetMapping("/2/")
	public String app2(@NonNull Model model) {
		model.addAttribute("appClass", "App2");
		model.addAttribute("someParam", "cux");
		return "index";
	}
}
